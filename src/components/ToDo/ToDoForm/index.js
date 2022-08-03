import React from "react";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { TASK_SCHEMS } from "utils/schemaValidations";

const initialValues ={
  bodyTask: '',
}

const ToDoForm = ({addTask,onFilter}) => {
  const onSubmit = (values,formikBag) =>{
    addTask({
      id:new Date().getTime(),
      bodyTask:values.bodyTask,
      statusTask:true,
    });
    console.log('add task ');
    formikBag.resetForm();
  }
  
  return(
    <Formik 
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={TASK_SCHEMS}
      >{
        (formikProps)=>{
          return(
            <Form>
              <Field type="text" name="bodyTask" placeholder="Enter data for task" />
              <ErrorMessage name="bodyTask" />
              <input type="submit" value='Add' />
              <Field as="select" name="statusTask" onChange={(event)=>onFilter(event.target.value)}>
                <option value="all">All</option>
                <option value="active">Active</option>
                <option value="done">Done</option>
               </Field>
            </Form>
          )
        }
      }
    </Formik>
  )
}

export default ToDoForm;