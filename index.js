const rootElement = document.getElementById('root')


/**********************************************
**          *** init function  ***           **
**********************************************/

  function Init(){
    return(
    <div>
      <Header />
      <Guts />
      <Footer />
    </div>
    )
  }


/**********************************************
**          *** Header class  ****           **
**********************************************/
  class Header extends React.Component {
    constructor() {
      super();
      this.state = {
        'mobilemenu': '',
        'scrollstate': 'init',
        'scrollpos': {
          'this': 'about',
          'about': {
              'this': 'About Me',
              'start': {'desktop': 50, 'mobile': 50},
              'end': {'desktop':200, 'mobile':300},          
        },
          'projects' : {
            'this': 'My Projects',
            'start': {'desktop': 201, 'mobile':301},
            'end': {'desktop': 400, 'mobile': 1000}
            },
        'skillsection' : {
           'this': 'Skills',
            'start': {'desktop': 401, 'mobile':1001},
            'end': {'desktop': 700, 'mobile': 1400}
          },
        'contact' : {
           'this': 'Contact Me',
            'start': {'desktop': 701, 'mobile':1401},
            'end': {'desktop': 1000, 'mobile': 1800}
          }
        },
        'ismobile': isMobileDevice(),
        'classList': [],
        'classListStr': '',
        'title': 'Kevin W. Bollman',
        'phone': '814-777-1196',
        'email': 'KevinBollman@gmail.com',
        'headline': 'Full Stack Web Developer'
      };
    }


    checkscreensize() {
      var classList = this.state.classList;
      if (isMobileDevice() == true) {
        classList = removefromarray(classList, 'isdesktop');
      
        if (hasValue(classList, 'ismobile') ==false) {
          classList.push('ismobile')
        }
      } else {
         
       
         classList = removefromarray(classList, 'ismobile');
      
        if (hasValue(classList, 'isdesktop')==false) {
          classList.push('isdesktop');
        }
      }
      this.setState({ismobile: isMobileDevice(), classList: classList, classListStr: convertarraytostr(classList)})

    }

    handleScroll(event) {
      var classList = this.state.classList
      var thestate = '';
      var scrollpos = this.state.scrollpos
     

      if (window.scrollY>50) {
       
        scrollpos['this'] = getscrollpos(window.scrollY, this.state.scrollpos);
        classList = removefromarray(classList, 'init');
        
        if (hasValue(classList, 'scrolled')==false) {
          classList.push('scrolled')
        }
        thestate='scrolled';
        
      } else {
        classList = removefromarray(classList, 'scrolled');
        if (hasValue(classList, 'init')==false) {
          classList.push('init')
        }
        thestate = 'init'
      }

      this.setState({'scrollstate': thestate, 
                    'classList': classList, 
                    'classListStr': convertarraytostr(classList),
                    'scrollpos': scrollpos
      })

    }


    componentDidMount() {
      this.checkscreensize();
      window.addEventListener("resize", this.checkscreensize.bind(this));
      window.addEventListener('scroll', this.handleScroll.bind(this));
      
  
     var scrollpos = this.state.scrollpos
     scrollpos.about = getTopBotPosOfEle(scrollpos.about, 'about', 'projects');
     scrollpos.projects = getTopBotPosOfEle(scrollpos.projects, 'projects', 'skills');
     scrollpos.skillsection = getTopBotPosOfEle(scrollpos.skillsection, 'skills', 'contact');
     scrollpos.contact = getTopBotPosOfEle(scrollpos.contact, 'contact', '');
     
     this.setState({scrollpos: scrollpos});

      if(window.location.hash.length > 0) {
        var el = getElementByHash(window.location.hash);
        var topPos = getTopPos(el) -100;
       
        setTimeout(function () {
          window.scrollTo({top: topPos});  
        }, 500);
      }
    }

  
    menu() {
      return(
        {
          'about': {
            'id': 'menu-item',
            'class': 'about',
            'text': 'About Me',
            'href': '#about'
          }, 
          'projects': {
            'id': 'menu-item',
            'class': 'projects',
            'text': 'Projects',
            'href': '#projects'
          }, 
          'skills': {
            'id': 'menu-item',
            'class': 'skills',
            'text': 'Skills',
            'href': '#skills'
          }, 
          'contact': {
            'id': 'menu-item',
            'class': 'contact',
            'text': 'Contact Me',
            'href': '#contact'
          }
        }
      )
    }

    render() {
      return(
        <div id = "header" className = {this.state.scrollstate=='init' ? 'init': 'scrolled'}>
          <div id = "title-container">
            <div id = "logo-container">&#x3C;K/&#x3E;</div>
              <div id = "text-container">
                <this.Title title = {this.state.title} />
                <this.Contact phone = {this.state.phone} />
                <this.Email email = {this.state.email} />
              </div>
          </div>

          <this.Icons />

          <div id = "menu-container" className = {this.state.scrollstate} >
            <this.Menu id = "desktop-menu" classList = {this.state.classListStr} menu = {this.menu()} />
            <this.Mobilemenu id = "mobile-menu" classList = {this.state.classListStr} menu = {this.menu()} scrollpos = {this.state.scrollpos}/>
          </div>
        </div>
      )
    }

    Icons(props) {
      return (
        <div id="icon-container">
          <Aicon class = "fa fa-git-square" valign = "top" />
          <Aiconimg src = "./src/includes/img/react_icon.png" height = "48px" width = "48px" valign="bottom" />
          <Aicon class = "fa fa-html5" valign = "top" />
          <Aiconimg src = "./src/includes/img/nodejs_icon.png" height = "36px" width = "36px" valign="bottom" />
          <Aicon class = "fa fa-code" valign = "top" />
          <Aiconimg src = "./src/includes/img/php_icon.png" height = "48px" width = "48px" valign="bottom" />
          <Aicon class = "fa fa-jsfiddle" valign = "top" />
        </div>
      )
    }

    Title(props) {
      return (
          <div id = "title">{props.title}</div>
      )
    }

    Contact(props) {
      return(
        <div class="phone"><a href = {'tel:' + props.phone}>{props.phone}</a></div>
      )
    }

    Email(props) {
      return (
        <div class = "email"><a href = {'mailto:' + props.email}>{props.email}</a></div>
      )
    }

    Headline(props) {
      return(
          <div id = "headline">{props.headline}</div>
        )
    }

    Menu(props) {
      return (
         <div id = "desktop-menu" className = {props.classList}>
          <Desktopmenu ismobile='false' classes = '' menu = {props.menu} />
         </div>
      )
    }

    Mobilemenu(props) {
      return (
        <div id = "mobile-menu" className = {props.classList}>
        <Mobilemenu ismobile = 'true' classes = '' menu = {props.menu} scrollpos = {props.scrollpos}/>
        </div>
      )
    }

  }// end class

/**********************************************
**          *** The Guts class  ****           **
**********************************************/
  class Guts extends React.Component {
    constructor() {
      super();
      this.state = {
        about: 'About Me',
        projects: 'My Projects',
        skills  : 'Skills',
        contact: 'Contact Me',
        myskills : {
          'frontend': {
            'id': 1,
            'text': 'Front End',
            'data': {
              'html': {
                'id': 1,
                'text':'HTML5'
              }, 
              'css': {
                'id': 2,
                'text':'CSS3'
              }
            }
          },
          'backend': {}
        },
        projs: {
          'millwood' : {
            'id': 1,
            'title': 'Millwood',
            'class': '',
            'desc': 'This is a website I did for Millwood Church in rogers.  The site is built on wordpress and the features include a customized theme, an events calendar, and a blog news feed.  The updates of content is managed solely by the power users of the church.',
            'href': 'https://millwoodchurchnwa.com'
          }, 
          'checkbook' : {
            'id': 2,
            'title': 'Checkbook',
            'class': '',
            'desc': 'This was a personal project that I did on my own.  It uses php code igniter along with mysql db server',
            'href' : './src/includes/img/checkbook.png'
        }, 
          'resume' : {
            'id': 3,
            'title': 'Resume Builder',
            'class': '',
            'desc': 'This was another personal project that I did on my own.  As I started my job search I wanted an easy way to manage different resume layouts.  This tool that I build allows me to do that.',
            'href' : './src/includes/img/resume_admin.png'
        },
          'checkboxme' : {
            'id': 4,
            'title': 'Checkbox.me',
            'class': '',
            'desc': 'This started out as a simple need to implement a fancier version of a checkbox which I thought was pretty cool so I decided to turn this into a plugin.  This written in 100% jQuery and I hope to have this published soon on jquery\'s plguin site.',
            'href': 'https://digitalkdogg.github.io/checkbox.github.io'
          },
          'moretocome' : {
            'id': 5,
            'title': 'More To Come',
            'class' : 'moretocome',
            'desc': 'I am always challenging my self to learn new technologies and always taking on new project so please check back later',
            'href': '#'
          } }
      }
    }

    render() {
      return(
        <div id = "the-guts">
          <div id = "about-section">
            <H2 text = {this.state.about} class = 'title' id = 'about' />
            <this.About />
          </div>
          <div id = "projects-section">
            <H2 text = {this.state.projects} class = 'title' id = 'projects' />
            <this.Projects projs = {this.state.projs} />
          </div>
          <div id = "skills-section">
            <H2 text = {this.state.skills} class = 'title' id = 'skills' />
            <this.Skills projs = {this.state.projs} />
          </div>
          <div id = "contact-section">
            <H2 text = {this.state.contact} class = 'title' id = 'contact' />
            <this.Contact />
          </div>

        </div>
      )
    }

    About(props) {
      return (
        <div class = "item">
          <P text = "I am a full stack web designer / developer.  I design websites both professionally and on the side.
           My biggest thrill is when I can empower customer to manage their own technology.  Why give someone a fish everyday
            when you can give them a fishing pole, and they are set for the rest of their life.  I enjoy connecting people
            with technology and in my spare time i am often coding or learning a new language or development stack to code in." />

           <P text = "People say that my biggest strength is my passion for a happy customer. While I do find that I am very 
           passionate about my work, I tend to think that my best strength is my ingenuity. My career has led me down many different
            path and have given me the opportunity to leverage many different technologies. In doing, so I have come to learn my 
            skill set to best fit the project I am working on. Take this website for example, why buy a domain when you can set up 
            a static website using reacts and GitHub pages to host your work." />

            <P text = "Currently I am working for walmart as the Tech Lead - Intranet Admin.  I am proud of the fact that I get to
             empower my teammates to run a great intranet system for 1.4 million assoicates." />
        </div>
      )
    }

    Projects(props) {
      return (
        <div class = "item">
            <P text = "Currently working on Walmart's Intranet doesn't leave me with very many opportunities to share my work.  I do
            have a number of personal projects that I can share.   I enjoy doing side projects in my spare time because it gives me the 
            chance to grow my skills set and also learn about new technologies." />

            <Aproject project = {props.projs.millwood} />
            <Aproject project = {props.projs.checkbook} />
            <Aproject project = {props.projs.resume} />
            <Aproject project = {props.projs.checkboxme} />
            <Aproject project = {props.projs.moretocome} />
        </div>
      )
    }

    Skills(props) {
      return (
        <div id = "skills-container" className = "item">
          <div id = "skills">
            <H2 text = "Front End" />
            <Askill text = "HTML 5" />
            <Askill text = "CSS3" />
            <Askill text = "Javascript / Jquery / React JS" />
            <Askill text = "Wordpress" />
            <Askill text = "Drupal" />
          </div>
          <div id = "skills">
            <H2 text = "Back End" />
            <Askill text = "PHP" />
            <Askill text = "Codeigniter" />
            <Askill text = "Laravel" />
            <Askill text = "MySQL" />
            <Askill text = "" />
          </div>
          <div id = "skills">
            <H2 text = "Server" />
            <Askill text = "Git Version Contral" />
            <Askill text = "Node JS" />
            <Askill text = "LAMP Stack" />
            <Askill text = "" />
            <Askill text = "" />
            <Askill text = "" />

          </div>
          <div id = "skills">
            <H2 text = "Other Skills" />
            <Askill text = "MVC Frameworks" />
            <Askill text = "REST API's" />
             <Askill text = "Object Oriented Programming" />
            <Askill text = "" />
             <Askill text = "" />
            <Askill text = "" />

          </div>
        </div>
      )
    }

    Contact(props) {
      return (
        <div id = "contact-wrapper" className="item">
          <p>Github pages is great because it lets you have a static website for free.  Unfortunately it doesn't let you do server side stuff, like email, 
          too easily.  I haven't got a chance to hook it up to any kind of api so right now you will have to email me.  Relax!  I have made it
          easy for you.  Just click the button below and it will start your email client.  I look forward to hearing from you.</p>
         <div id ="btn-wrapper">
           <a href = "mailto:KevinBollman@gmail.com?Subject=Kevin Bollman Website Contact"><button>Email Me!</button></a>
         </div>
        </div>
      )
    }

  }


/**********************************************
**          *** The Aproject class  ****           **
**********************************************/
  class Aproject extends React.Component {
    constructor() {
      super();
      this.state = {}
    }

    render(props) {
      return(
          <div className = {"project " + this.props.project.class}>
            <div className = "title">
              {this.props.project.title}
            </div>
            <div className = "desc">
              {this.props.project.desc}
            </div>
            <div className = "btn-container">
              <a href = {this.props.project.href} target="_blank">
                <button>View More</button>
              </a>
            </div>
          </div>
      )
    }

  }

/**********************************************
**          *** The AIcoimg class  ****     **
**********************************************/
  class Aiconimg extends React.Component {
    constructor() {
      super();
      this.state = {}
    }

    render(props) {
      return(
         <div className={this.props.valign}>
            <img src = {this.props.src} height= {this.props.height} width = {this.props.src} />
          </div>
      )
    }

  }

/**********************************************
**          *** The AIcon class  ****     **
**********************************************/
  class Aicon extends React.Component {
    constructor() {
      super();
      this.state = {}
    }

    render(props) {
      return(
         <div className={this.props.valign}>
            <i className={this.props.class} aria-hidden="true"></i>
          </div>
      )
    }

  }

  /**********************************************
**          *** The Askill class  ****           **
**********************************************/
  class Askill extends React.Component {
    constructor() {
      super();
      this.state = {}
    }

    render(props) {
      return(
          <div className = "skill">
            {this.props.text}
          </div>
      )
    }

  }

/**********************************************
**          *** The desktop menu class  ****           **
**********************************************/
  class Desktopmenu extends React.Component {
    constructor() {
      super();
      this.state = {
        'menu' : 'despanded'
      }
    }

    menu_item(item) {
      var el = document.getElementById(item);
      var topPos = getTopPos(el) -300; 
      if (topPos <= 0 ) {
        topPos=50
      }
      window.scrollTo({top: topPos}); 
    }

    render(props) {
      return(
       <div id = "desktop-menu-container">
          <div id = {this.props.menu.about.id} onClick = {this.menu_item.bind(this, 'about')}>{this.props.menu.about.text} </div>
          <div id = {this.props.menu.projects.id} onClick = {this.menu_item.bind(this, 'projects')}>{this.props.menu.projects.text}</div>
          <div id = {this.props.menu.skills.id} onClick = {this.menu_item.bind(this, 'skills')}>{this.props.menu.skills.text}</div>
          <div id = {this.props.menu.contact.id} onClick = {this.menu_item.bind(this, 'contact')}>{this.props.menu.contact.text}</div>
       </div>
      )
    }

  }

/**********************************************
**          *** The mobile menu class  ****           **
**********************************************/
  class Mobilemenu extends React.Component {
    constructor() {
      super();
      this.state = {
        'menu' : 'despanded'
      }
    }

    open_menu(e) {
      if (this.state.menu=='despanded') {
        var status = 'expanded';
      } else {
        var status = 'despanded';
      }

      if (status != null || status != '') {
        this.setState({
          'menu': status
        })
      }
    }

    handleScroll(event) {
      if (this.state.menu == 'expanded') {
        var menubox = document.getElementById('mobile-menu-box')
        menubox.click();
      }
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll.bind(this));
    }

    menu_item(item) {
      var el = document.getElementById(item);
      var topPos = getTopPos(el) -100; 
      if (topPos <= 0 ) {
        topPos=50
      }
      window.scrollTo({top: topPos}); 
      if (this.state.menu == 'expanded') {
        var menubox = document.getElementById('mobile-menu-box')
        menubox.click();
      }

      var activemenu = document.getElementById('active-menu-item');
      if (item == 'about') {
        activemenu.innerText = 'About Me'
      }

      if (item == 'projects') {
        activemenu.innerText = 'My Projects'
      }
      
      if (item == 'skills') {
        activemenu.innerText = 'Skills'
      }
      
      if (item == 'contact') {
        activemenu.innerText = 'Contact'
      }
       
    }

    render(props) {
      return(
        <div id = "mobile-menu-container">
          <div id = "mobile-menu-box"  onClick={this.open_menu.bind(this)}>
            <span className = "line"></span>
            <span className = "line"></span>
            <span className = "line"></span>
          </div>

          <div id = "active-menu-item">{this.props.scrollpos.this}</div>

          <div id = "mobile-menu-list" className = {this.state.menu} >
            <div id = "mobile-list-container">
            
                <div id = {this.props.menu.about.id} onClick = {this.menu_item.bind(this, 'about')}>{this.props.menu.about.text}</div>
                <div id = {this.props.menu.projects.id}  onClick = {this.menu_item.bind(this, 'projects')}>{this.props.menu.projects.text}</div>
                <div id = {this.props.menu.skills.id}  onClick = {this.menu_item.bind(this, 'skills')}>{this.props.menu.skills.text}</div>
                <div id = {this.props.menu.contact.id}  onClick = {this.menu_item.bind(this, 'contact')}>{this.props.menu.contact.text}</div>
              
            </div>
          </div>
        </div> 
      )
    }

  }


/**********************************************
**          *** The p class  ****           **
**********************************************/
  class P extends React.Component {
    constructor() {
      super();
      this.state = {}
    }

    render(props) {
      return(
          <p className = {this.props.class}>{this.props.text}</p>
      )
    }

  }


/**********************************************
**          *** The h2 class  ****           **
**********************************************/
  class H2 extends React.Component {
    constructor() {
      super();
      this.state = {}
    }

    render(props) {
      return(
          <h2 id = {this.props.id} className = {this.props.class}>{this.props.text}</h2>
      )
    }

  }


/**********************************************
**          *** The Footer class  ****           **
**********************************************/
  class Footer extends React.Component {
    constructor() {
      super();
      this.state = {}
    }

    render() {
      return(
        <div id = "footer"><p>&copy; Kevin Bollman 2019 Hosted On Github Pages Built on React JS</p></div>
      )
    }

  }

/**********************************************
**          *** Start the app **              **
**********************************************/
  // Use the ReactDOM.render to show your component on the browser
  ReactDOM.render(
    <Init />,
    document.getElementById('root')
  );


/*******************************************************
*              *** is mobile device function  ****     *
********************************************************
*  This function does several differnt method checks   *
*  to determine if you on a mobile device / screen size*
*  @return : boolean                                   *
*******************************************************/
  function isMobileDevice() {
    var device = (typeof window.orientation !== "undefined") || (navigator.userAgent.indexOf('IEMobile') !== -1);
     if(window.innerWidth <= 800) {
      device = true;
     } else {
      device = false;
      if (/iPhone|iPad|iPod|Android/i.test(navigator.userAgent) ==true) {
        device=true;
      } 
     }
     
    return device
  };


/*******************************************************
*              *** in array function  ****     *
********************************************************
*  This function this function determines if a string  *
* is in a certain array or not                         *
*  @return : boolean                                   *
*******************************************************/

 function hasValue(arr,value) {
  var i;
  for (i=0; i<arr.length; i++) { if (arr[i] === value) return true; }
  return false;
}

/*******************************************************
*   *** check and remove from array function  ****     *
********************************************************
*  This function checks for a string in array and      *
*  removes it                                          *
*  @return : new array                                   *
*******************************************************/
function removefromarray(arr, value) {
   if (hasValue(arr, value) ==true) {
      var newlist = []
      for (var x = 0; x<arr.length; x++) {

        if (arr[x]!= value) {
          newlist.push (arr[x])
        }
      }
      arr = newlist
    }
    return arr;
}

/*******************************************************
*   *** convert array to str function  ****     *
********************************************************
*  loops through an array and converts it to a str       *
*. this is so we can build a poper html class list.      *
*  @return : new string                                   *
*******************************************************/
function convertarraytostr(arr) {
  var arrstr = '';
  for (var x=0; x<arr.length; x++) {
    if (arrstr == '') {
      arrstr = arr[x] + ' ';
    } else {
      arrstr = arrstr + arr[x] + ' ';
    }
  }
  return arrstr
}

/********************************************************
*.                ***  get Top Pos. ***                 *
*********************************************************
*. Returns the top pos of an passed in element          *
*  return : numnber                                     *
********************************************************/ 
function getTopPos(el) {
    for (var topPos = 0;
        el != null;
        topPos += el.offsetTop, el = el.offsetParent);
    return topPos;
}

/********************************************************
*.                ***  get scroll pos. ***              *
*********************************************************
*. gets the pos title of the passed in scroll element   *
*  Return text                                          *
********************************************************/ 
 function getscrollpos(pos, params) {
      var section = '';
      var keys = Object.keys(params);
        for (var i = 0; i<keys.length; i++) {
          try {
            if (params[keys[i]] != undefined) {
              if (isMobileDevice == true) {

              } else {
                if (pos >= params[keys[i]].start.desktop  ) {
                  if (pos <= params[keys[i]].end.desktop ) {
                    section = params[keys[i]].this
                  }
                }
              }
            }
          } catch (e) {}//console.log(params[keys[i]])}
        }
    
      return section
    }     

/********************************************************
*.        ***  get element by hashtag ***               *
*********************************************************
*. finds the element based on a passed in value         *
*  return : object                                     *
********************************************************/ 
function getElementByHash(hashtag) {
  var el = null;
  if (hashtag.indexOf('#')>=0) {
    hashtag = hashtag.replace('#', '');
    hashtag = hashtag.toLowerCase();
    el = document.getElementById(hashtag)
  }
  return el;
}

/*******************************************************
*        *** get top bottom pos of ele  ****           *
********************************************************
*  get the top and bottom pos of a given element       *
*  @return : obj                                    *
*******************************************************/
function getTopBotPosOfEle(obj, ele, nextele) {
  var top = getTopPos(document.getElementById(ele)) - 250;

  if (nextele.length > 0 ) {
    var nexttop = getTopPos(document.getElementById(nextele)) - 250;
  } else {
    var nexttop = top + 500;
  }

  obj.start.desktop = top
  obj.end.desktop = nexttop-50;

  return obj;
}


/*******************************************************
*        *** get length of an object   ****            *
********************************************************
*  get the lendth of a object                          *
*  @return : number                                    *
*******************************************************/
Object.size = function(obj) {
    var size = 0, key;
    for (key in obj) {
        if (obj.hasOwnProperty(key)) size++;
    }
    return size;
};