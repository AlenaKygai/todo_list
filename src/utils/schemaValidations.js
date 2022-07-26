import * as Yup from 'yup';

export const TASK_SCHEMS = Yup.object({
 bodyTask: Yup.string().matches(/[A-Z][a-z]{10,100}$/,'Must be latin letter').required(),
})