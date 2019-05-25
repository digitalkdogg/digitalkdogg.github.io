<?php
defined('BASEPATH') OR exit('No direct script access allowed');
?><!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="utf-8">
	<title>Welcome to CodeReact</title>
	<script type="application/javascript" src="<?php echo $this->config->item('react_dir'); ?>react.production.min.js"></script>
  	<script type="application/javascript"  src="<?php echo $this->config->item('react_dir'); ?>react-dom.production.min.js"></script>
  	<script type="application/javascript"  src="<?php echo $this->config->item('react_dir'); ?>babel.js"></script>
</head>
<body>
		 <div id="root"></div>

<script type="text/babel">
// Obtain the root 
    const rootElement = document.getElementById('root')
// Create a ES6 class component    
   
// Create a function to wrap up your component
function App(){
  return(
  <div>
    <Test />
    <Testsclass />
  </div>
  )
}

function Test(){
  return(
    <div id = "test">test</div>
  )
}


class Testsclass extends React.Component {
  constructor() {
    super();
    this.state = {}
}

render() {
  return(
    <div>render</div>
  )
}

}


// Use the ReactDOM.render to show your component on the browser
  ReactDOM.render(
    <App />,
  document.getElementById('root')
);

</script>

</body>
</html>