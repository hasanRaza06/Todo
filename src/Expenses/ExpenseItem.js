import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
import './Expense.css';
function ExpenseItem(props){  
    // const [title,setTitle]=useState(props.title);
    // const clickHandler=()=>{
    //     setTitle('Updated!');
    // };
    return (
           <div className='expense-item'>
           <ExpenseDate date={props.date}></ExpenseDate>
            <div className='expense-item__description'>
            <h1>{props.title}</h1>
            <div className='expense-item__price'>${props.amount}</div>
            </div>
            {/* <button onClick={clickHandler}>Change Title</button> */}
           </div>
    );
}
 
export default ExpenseItem;