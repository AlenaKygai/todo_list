import React from "react";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { TASK_SCHEMS } from "utils/schemaValidations";
import styles from './ToDoForm.module.scss';
import AddBoxRoundedIcon from '@mui/icons-material/AddBoxRounded';

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
            <Form className={styles.toDoForm}>
              <div className={styles.inputBlockForm}>
              <Field type="text" name="bodyTask" placeholder="Enter data for task" className={styles.inputForm}/>
              <ErrorMessage name="bodyTask" />
              <button type="submit"   className={styles.buttonForm}>
                <AddBoxRoundedIcon className={styles.buttonIcon}/>
              </button>
              </div>
              <Field 
                as="select" 
                name="statusTask" 
                onChange={(event)=>onFilter(event.target.value)}
                className={styles.selectForm}
              >
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