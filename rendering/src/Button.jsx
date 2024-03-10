function Button(){
    let count =0;
    const handleClick = (event)=>{
        count++;
        console.log(event);
        if(count <3){
            console.log(`You clicked me  ${count} times.`);
        }
        else{
            event.target.style.display = 'none';
            console.log(`Stop Clicking me`);
        }
    };
    return (
        
        <button onClick={(e)=>{handleClick(e)}}>
            click me
        </button>
    );
}
export default Button;