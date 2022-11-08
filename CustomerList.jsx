import { Component } from "react";
export class MainContent extends Component {
  state = { pageTitle: "Customers",
   customersCount: 5,
  customers:[
    {id:1, name:"Yoel",phone:123-453, adress:{city:"Ramat-Gan"}, photo:"https://picsum.photos/id/1014/60"},
    {id:2, name:"Noam",phone:123-454, adress:{city:"Tel-Aviv"},photo:"https://picsum.photos/id/1011/60"},
    {id:3, name:"Avi",phone:123-455, adress:{city:"Jerusalem"},photo:"https://picsum.photos/id/1009/60"},
    {id:4, name:"Gaya",phone:123-456, adress:{city:"Yokneam"},photo:"https://picsum.photos/id/1006/60"},
    {id:5, name:"Eli",phone:null, adress:{city:"Beer-Sheva"},photo:"https://picsum.photos/id/1005/60"},
  ] };
  
  // customerNameColor= (custName) => {
  //   if (custName.indexOf("Y")==0) return "green-highlight";
  //   else if (custName.startsWith("G")) return "red-text";
  //   else return {};
  // };
  render() {
    return (
      <div>
        <h4 className="border-bottom m-1 p-1">
          {this.state.pageTitle}   
          
     <span className="bg-secondary badge
      m-2">{this.state.customersCount}</span>
      <button className="btn btn-info" onClick={this.onRefreshClick}>Refresh</button>
          </h4>
          <table className="table">
            <thead>
            <tr>
              <th>#</th>
              <th>Customer Name</th>
              <th>Phone</th>
               <th>Adress</th>
            </tr>
            </thead>
            <tbody>
              {this.getCustomerRow()}
            </tbody>
          </table>
     
      </div>
    );
  }
  onRefreshClick=() =>{
    this.setState({customersCount:7})
  }

phoneCheck=(phone) => {
  return (
    phone ? (phone):(<div className="bg-warning p-2">No Phone</div>)
  );
}
  getCustomerRow= () => {
    return (
       this.state.customers.map((cust, index) => {
        return(
        <tr key={cust.id}>
          <td>{cust.id}</td>
          <td>
            <img src={cust.photo} alt="Customer Photo" />
            <div>
              <button  className="btn btn-sm btn-secondary" onClick={()=>{this.onChangePic(cust, index);}}>Change Picture
            </button>
            </div>
          </td>
          <td>{cust.name}</td>
          <td>{this.phoneCheck(cust.phone)}</td>
        <td>{cust.adress.city}</td>
      </tr>
       );
        })
    )

  }

  onChangePic= (cust, index) => {
    // console.log(cust);
    // console.log(index);
    var custArr = this.state.customers
    custArr[index].photo="https://www.clipartmax.com/png/small/140-1402706_you-see-withdrawals-from-your-bank-account-that-you-red-flag-icon.png"
    this.setState({customers:custArr});
  }

}