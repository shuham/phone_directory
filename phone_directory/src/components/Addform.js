import {Component} from 'react';
import List from './List';

class Addform extends Component{
    constructor(props){
        super(props);

        this.state={
            dir:[],
            item:{
                name:"",
                tel:"",
                rtel:"",
                cityname:"",
                ctryname:"",
                street:""

            },
            isEditing:false,
            temp_index:null
        }
        this.handleChange = this.handleChange.bind(this)
        this.add = this.add.bind(this)
        this.delete = this.delete.bind(this)
        this.edit = this.edit.bind(this)
        this.update = this.update.bind(this )
        this.view = this.view.bind(this)
    }

    view(item){
        alert(
            `
            Name = ${item.name}
            Tel=${item.tel}
            Rtel=${item.rtel}
            City=${item.cityname}
            Country=${item.ctryname}
            Street Address=${item.street}

            `
        )
    }

    handleChange(event){
        const name = event.target.name;
        const value= event.target.value;
        let item = this.state.item;

         item[name]=value;

         this.setState({item:item})
    }

    add(e){
        e.preventDefault()
        let dir = this.state.dir;
        dir.push(this.state.item)
        this.setState({dir:dir, item:{name:"",tel:"",rtel:"",cityname:"",ctryname:""}})
        console.log(this.state.dir)
    }

    edit(index){
        let item = this.state.dir[index]
        this.setState({item:item, isEditing:true, temp_index:index})

    }

    update(e){
        e.preventDefault()
        let dir = this.state.dir;
        dir[this.state.temp_index] = this.state.item

        this.setState({
            dir:dir,
            item:{
                name:"",
                tel:"",
                rtel:"",
                cityname:"",
                ctryname:"",
                street:""
            },
            isEditing:false,
            temp_index:null
        })
    }

    delete(index){
        let dir = this.state.dir;
        dir.splice(index, 1)
        this.setState({dir:dir})
    }
    render(){
        return (
            <div>
                <h1 className='alert-info text-center'>Your Contact Detalis</h1>
               <form method="POST" onSubmit={this.state.isEditing ? this.update : this.add}>
                   <div>
                       <input
                           type="text"
                           name="name"
                           placeholder="Enter Name"
                           className="form-control"
                           value={this.state.item.name}
                           onChange={this.handleChange}
                           />&nbsp;
                             
                   </div>

                   <div>
                       <input
                           type="text"
                           name="tel"
                           placeholder="Enter Office Phone no."
                           className="form-control"
                           value={this.state.item.tel}
                           onChange={this.handleChange}
                           />&nbsp;
                             
                   </div>
                   <div>
                       <input
                           type="text"
                           name="rtel"
                           placeholder="Enter Residential Phone no."
                           className="form-control"
                           value={this.state.item.rtel}
                           onChange={this.handleChange}
                           />&nbsp;
                             
                   </div>
                   <div>
                       <input
                           type="text"
                           name="cityname"
                           placeholder="Enter your City"
                           className="form-control"
                           value={this.state.item.cityname}
                           onChange={this.handleChange}
                           />&nbsp;
                             
                   </div>
                   <div>
                       <input
                           type="text"
                           name="ctryname"
                           placeholder="Enter your Country "
                           className="form-control"
                           value={this.state.item.ctryname}
                           onChange={this.handleChange}
                           />&nbsp;
                             
                   </div>
                   <div>
                       <input
                           type="text"
                           name="street"
                           placeholder="Enter your Street Address"
                           className="form-control"
                           value={this.state.item.street}
                           onChange={this.handleChange}
                           />&nbsp;
                             
                   </div>
                   <div>
                       <button className="btn btn-primary" color="red" type="submit">
                           {this.state.isEditing ? "Update" : "Save"}
                       </button>&nbsp;
                   </div>
               </form>

               <List
                  dir={this.state.dir}
                  delete={this.delete}
                  edit={this.edit}
                  view={this.view}
                  
               />
            </div>


        )
        }

}
export default Addform;