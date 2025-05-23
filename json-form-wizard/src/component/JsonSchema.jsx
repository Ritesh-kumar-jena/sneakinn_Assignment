export const Schema=[{
    "title": "User Profile Form",
    "fields": [
      {
        "label": "Full Name",
        "name": "fullName",
        "type": "text",
        "required": true
      },
      {
        "label": "Gender",
        "name": "gender",
        "type": "radio",
        "options": ["Male", "Female", "Other"],
        "required": true
      },
      {
        "label": "Country",
        "name": "country",
        "type": "select",
        "options": ["USA", "India", "Germany"],
        "required": true
      },
      {
        "label": "Subscribe to Newsletter",
        "name": "newsletter",
        "type": "checkbox"
      },
      {
        "label": "Work Experience",
        "name": "workExperience",
        "type": "repeatable",
        "fields": [
          {
            "label": "Company Name",
            "name": "company",
            "type": "text",
            "required": true
          },
          {
            "label": "Role",
            "name": "role",
            "type": "text",
            "required": true
          },
          {
            "label": "Years",
            "name": "years",
            "type": "number"
          }
        ]
      }
    ]
  }
  ]