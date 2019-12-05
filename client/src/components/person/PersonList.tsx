import * as React from "react";
import Person from "../../models/vo/Person";
import PersonService from "../../services/PersonService";

export interface IPersonListProps {}

export interface IPersonListState {
    personList: Person[];
}
export default class PersonList extends React.Component<
    IPersonListProps,
    IPersonListState
> {
    state = {
        personList: []
    };
    componentDidMount() {
        let personService = new PersonService();
        personService.getPersonList().then(personData => {
            console.log(personData);
            this.setState({
                personList: personData
            });
        });
    }
    public render() {
        //console.log(this.state.personList);
        return (
            <div>
                <ul>
                    {this.state.personList.map((person: Person, index) => (
                        <li key={index}>
                            姓名：{person.name} , 年龄：{person.age}
                        </li>
                    ))}
                </ul>
            </div>
        );
    }
}
