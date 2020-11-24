import Title from './title'

/*************************************************

  "skills": [
    {
      "name": "Web Development",
      "level": "Master",
      "keywords": [
        "HTML",
        "CSS",
        "Javascript"
      ]
    }
  ]

*************************************************/

export default ({title, skills = [ ]}) =>
  <div id="Skills">
    <Title title={title} count={skills.length} />
    { skills.map((skill, s) =>
      <div key={s}>
        <p>
          <b> {skill.name} </b>
          ({skill.level})
        </p>
        <p>
          {skill.keywords.map((keyword, k) =>
            <span key={k}>
              {keyword}
            </span>
          )}
        </p>
      </div>
    )}
    <style jsx>{`
      span {
        background: rgba(190, 190, 190, 0.25);
        border-radius: 5px;
        padding: 3px 6px;
        display: inline-block;
        margin-bottom: 5px;
        margin-right: 5px;
      }
    `}</style>
  </div>
