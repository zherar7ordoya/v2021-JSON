import Title from './title'

/*************************************************

  "publications": [
    {
      "name": "Publication title",
      "publisher": "Company",
      "releaseDate": "2014",
      "website": "http://publication.com",
      "summary": "Description..."
    }
  ]

*************************************************/

const Publications = ({title, publications = [ ]}) =>
  <div id="Publications">
    <Title title={title} count={publications.length} />
    { publications.map((publication, publicationIndex) =>
      <p key={publicationIndex}>
        <b> {publication.name} </b>
        <span> {publication.publisher} {publication.releaseDate} </span>
        <span> {publication.website} </span>
        {publication.summary}
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

export default Publications;