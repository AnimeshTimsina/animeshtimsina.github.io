import { TextField } from "@material-ui/core"
import { CustomButton } from "components/button/button.view"
import Spinner from "components/spinner"
import emailjs from "emailjs-com"
import MuiPhoneNumber from "material-ui-phone-number"
import React, { useState } from "react"
import { FIELDS } from "./fields"
import { useStyles } from "./form.styles"

export const ContactForm = () => {
  const classes = useStyles()
  const [values, setValues] = useState<any>({})
  const [loading, setLoading] = useState(false)
  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target
    setValues({
      ...values,
      [name]: value,
    })
  }
  const handlePhoneNumberChange = (value: any) => {
    setValues({
      ...values,
      [FIELDS.PHONE]: value,
    })
  }

  const emailIsValid = (email: string) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)

  const handleSubmit = () => {
    if (!values[FIELDS.NAME]) {
      alert("Name cannot be empty")
      return
    }
    if (!values[FIELDS.EMAIL]) {
      alert("Email cannot be empty")
      return
    }
    if (!values[FIELDS.MESSAGE]) {
      alert("Message cannot be empty")
      return
    }
    if (!emailIsValid(values[FIELDS.EMAIL])) {
      alert("Enter a valid email address")
      return
    }
    setLoading(true)
    const toSend = {
      name: values[FIELDS.NAME],
      email: values[FIELDS.EMAIL],
      phone: values[FIELDS.PHONE],
      message: values[FIELDS.MESSAGE],
      to_name: "timsinaanimesh@gmail.com",
      from_name: values[FIELDS.NAME],
    }
    if (
      process.env.REACT_APP_MAIL_SERVICE_ID &&
      process.env.REACT_APP_MAIL_TEMPLATE_ID
    ) {
      emailjs
        .send(
          process.env.REACT_APP_MAIL_SERVICE_ID,
          process.env.REACT_APP_MAIL_TEMPLATE_ID,
          toSend
        )
        .then(
          (response) => {
            setLoading(false)
            alert("Message sent successfully! ")
          },
          (error) => {
            setLoading(false)

            alert(`Error sending message! ${error}`)
          }
        )
    }
  }
  return (
    <div className={classes.root}>
      <Spinner open={loading} />
      <div className={classes.contact}>
        <form className={classes.contact__form}>
          <TextField
            fullWidth
            variant="outlined"
            name={FIELDS.NAME}
            value={values[FIELDS.NAME] || ""}
            onChange={handleChange}
            color="secondary"
            className={classes.formField}
            label="Name"
            InputProps={{
              className: classes.formInput,
            }}
            InputLabelProps={{
              classes: {
                root: classes.formLabel,
              },
            }}
          />
          <TextField
            fullWidth
            color="secondary"
            variant="outlined"
            name={FIELDS.EMAIL}
            type="email"
            value={values[FIELDS.EMAIL] || ""}
            onChange={handleChange}
            className={classes.formField}
            label="Email"
            InputProps={{
              className: classes.formInput,
            }}
            InputLabelProps={{
              classes: {
                root: classes.formLabel,
              },
            }}
          />
          <MuiPhoneNumber
            defaultCountry={"np"}
            fullWidth
            color="secondary"
            variant="outlined"
            name={FIELDS.PHONE}
            value={values[FIELDS.PHONE] || ""}
            onChange={handlePhoneNumberChange}
            className={classes.formField}
            label="Phone"
            InputProps={{
              className: classes.formInput,
            }}
            InputLabelProps={{
              classes: {
                root: classes.formLabel,
              },
            }}
          />
          <TextField
            fullWidth
            color="secondary"
            multiline
            rows={6}
            rowsMax={6}
            variant="outlined"
            name={FIELDS.MESSAGE}
            value={values[FIELDS.MESSAGE] || ""}
            onChange={handleChange}
            className={classes.formField}
            label="Message"
            InputProps={{
              className: classes.formInput,
            }}
            InputLabelProps={{
              classes: {
                root: classes.formLabel,
              },
            }}
          />
          <CustomButton text="Send" callback={() => handleSubmit()} />
        </form>
      </div>
    </div>
  )
}
