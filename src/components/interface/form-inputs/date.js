import React from 'react'
// import 'flatpickr/dist/themes/light.css'
// import DatePicker from 'react-flatpickr'

function FormDate(field)  {

  const { meta: { touched, error} } = field

  const inputClassName = `input  ${ touched && error ? 'danger' : ''}`

  return (
    <div className="field">
      <label className="label">{field.label}</label>
      <div className="control">
        <input
          {...field.input}
          className={inputClassName}
          type={field.type}

          placeholder={field.placeholder}
        />

      </div>
      { touched ? <p className="help is-danger">{error}</p> : ''  }
    </div>
  )
}

export { FormDate }

// return (
//   <div className="field">
//     <label className="label">{field.label}</label>
//     <div className="control">
//
//       <DatePicker className={inputClassName}
//         {...field.input}
//       />
//
//     </div>
//     { touched ? <p className="help is-danger">{error}</p> : ''  }
//   </div>
// )
