import * as React from "react";
import PersonList from "../components/person/PersonList";

export interface IPersonListPageProps {}

export default class PersonListPage extends React.Component<
    IPersonListPageProps
> {
    public render() {
        return (
            <div>
                <PersonList></PersonList>
            </div>
        );
    }
}
