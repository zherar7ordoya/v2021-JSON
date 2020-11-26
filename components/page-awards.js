import Title from './title'

/*************************************************

  "awards": [
    {
      "title": "Award title",
      "date": "2018",
      "awarder": "Awarder",
      "summary": "Description..."
    }
  ]

*************************************************/

const Awards = ({title, awards = [ ]}) =>
  <div id="Awards">
    <Title title={title} count={awards.length} />
    { awards.map((award, awardIndex) =>
      <p key={awardIndex}>
        <b> {award.title} </b>
        <span> {award.date} {award.awarder} </span>
        {award.summary}
      </p>
    )}
    <style jsx>{`
      span {
        display: block;
        opacity: 0.5;
        margin: 2px 0;
      }
    `}</style>
  </div>

export default Awards;