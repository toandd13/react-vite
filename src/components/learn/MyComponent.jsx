//() => {}
// function App() {
//component = html + css + js
//JSX
//Fragment
import './style.css'
const MyComponent = () => {
    // const name = "Toàn" //String 
    // const name = 20  //Number
    // const name = true //boolean
    // const name = undefined
    // const name = null
    const name = [1, 2, 3]
    // const name = {
    //     name: "Toàn",
    //     age: 20
    // }
    return (
        <>
            <div>{JSON.stringify(name)} & ToànPro update</div>
            <div className="child">2004</div>
        </>
    );
}
export default MyComponent