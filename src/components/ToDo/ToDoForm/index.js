import React from "react";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { TASK_SCHEMS } from "utils/schemaValidations";
import styles from './ToDoForm.module.scss';
import AddBoxRoundedIcon from '@mui/icons-material/AddBoxRounded';
import SelectComponent from "components/Select";

const initialValues ={
  bodyTask: '',
}
const options = [
  { value: 'all', label: 'All' },
  { value: 'active', label: 'Active' },
  { value: 'done', label: 'Done' }
]

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
              <SelectComponent
              name="statusTask" 
              options={options}
              onChange={({value})=>{onFilter(value)}}
              defaultValue={options[0]}
              />
            </Form>
          )
        }
      }
    </Formik>
  )
}

export default ToDoForm;