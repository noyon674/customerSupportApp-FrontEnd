import React from "react";

import "./ticket_form.scss";
import { GrAttachment } from "react-icons/gr";
import SelectField from "../common/SelectField";
import InputField from "../common/InputField";
import { useForm } from "../common/useForm";
import TextAreaField from "../common/TextAreaField";

function TicketForm() {

  const { values, handleChange } = useForm({
    title: "",
    category: "",
    priority: "",
    file: "",
    textarea: "",
  });

  const { title, category, priority, file, textarea } = values;

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const options = {
    categoryOptions: ["Network Issue", "Technical Issue", "Server Issue"],
    priorityOptions: ["low", "medium", "high"],
  };

  return (
    <>
      <form action="" className="ticket-comp" onSubmit={handleSubmit}>
        <div className="input">
          <label htmlFor="title">Title</label>
          <InputField
            type="text"
            name="title"
            value={title}
            onChange={handleChange}
            required
          />
        </div>

        <div className="input option">
          <label htmlFor="title">Category</label>
          <SelectField
            name="category"
            value={category}
            onChange={handleChange}
            required
            options={options.categoryOptions}
          />
        </div>

        <div className="input option">
          <label htmlFor="title">Priority</label>
          <SelectField
            name="priority"
            value={priority}
            onChange={handleChange}
            required
            options={options.priorityOptions}
          />
        </div>

        <div className="input">
          <label htmlFor="">Attachment</label>
          <div className="inner-attach">
            <InputField
              id="file"
              type="file"
              name="file"
              value={file}
              onChange={handleChange}
              required
            />
            <div className="icon">
              <GrAttachment />
            </div>
          </div>
        </div>

        <div className="input">
          <label htmlFor="">Description</label>
          <TextAreaField
            name="textarea"
            value={textarea}
            onChange={handleChange}
            required
          />
        </div>

        <div className="input">
          <button type="submit">Submit Ticket</button>
        </div>
      </form>
    </>
  );
}

export default TicketForm;
