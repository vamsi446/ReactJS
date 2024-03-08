import PropTypes from 'prop-types'
//props = read-only properties that are shared between components. A parent component can send
// data to a child component 
// <Component key=value/>>
import Student from "./Student";
function App() {
  return(<>
  <Student name="Spongebob " age ={20} isStudent={true}/>
  <Student name="patrick " age ={22} isStudent={true}/>
  <Student name="vamsi " age ={23} isStudent={true}/>
  <Student name="john " age ={28} isStudent={false}/>
  </>);
}
Student.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number,
  isStudent: PropTypes.bool,
}
Student.defaultProps ={
  name: "Guest",
  age: 0,
  isStudent: false,
}
export default App
