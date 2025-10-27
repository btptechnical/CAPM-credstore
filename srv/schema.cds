using { mydept.db as mydept } from '../db/schema';

service MyDepartments {

    entity Departments as projection on mydept.Department;    

    function fnCallCredStore() returns array of String;
    function fnCallCreate() returns array of String;
    function fnCallUpdate() returns array of String;
    function fnCallDelete() returns array of String;

}