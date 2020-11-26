
import Title from './title'

/*************************************************

  "languages": [
    {
      "language": "English",
      "fluency": "Native speaker"
    }
  ]

*************************************************/

const Languages = ({title, languages = [ ]}) =>
  <div id="Languages">
    <Title title={title} count={languages.length} />
    { languages.map((language, languageIndex) =>
      <p key={languageIndex}>
        {language.language} ({language.fluency})
      </p>
    )}
    <style jsx>{`
    `}</style>
  </div>


export default Languages;