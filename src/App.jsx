import './index.css';
import EventCalendar from './EventCalendar';
import {addDays, subDays} from "date-fns";

function App() {
  return (
    <>
    <h1 className="text-3xl text-red-500 font-bold underline text-center">Hello world!</h1> 
      <EventCalendar events={[
          {data: subDays(new Date(), 6), title: "Post video"},
          {data: subDays(new Date(), 1), title: "Edit video"},
          {data: subDays(new Date(), 3), title: "Code"},
        ]}
      /> 
    </>
  )
}

export default App
