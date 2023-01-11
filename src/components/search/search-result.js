import { Link } from "gatsby"
import { default as React } from "react"
import {
  connectStateResults,
  Highlight,
  Hits,
  Index,
  Snippet,
  PoweredBy,
} from "react-instantsearch-dom"
const HitCount = connectStateResults(({ searchResults }) => {
  const hitCount = searchResults && searchResults.nbHits
  return hitCount > 0 ? (
    <div className="HitCount">
      {hitCount} result{hitCount !== 1 ? `s` : ``}
    </div>
  ) : null
})


const PageHit = (({ hit }) => {

  if (!hit) return null;

  const date = new Date(hit.fields.publishDate['en-US']);
  const month = date.toLocaleString('default', { month: 'short' });
  const day = date.getDate();
  const year = date.getFullYear();
  const dateString = `${month} ${day}, ${year}`;

  return hit ? (
    <div>
      <Link to={ "blog/" + hit.fields.slug['en-US'] } >


        <h4>
          <Highlight attribute="fields.title.en-US" hit={hit} tagName="mark" />
        </h4>
      </Link>
      <Snippet attribute="fields.description.en-US" hit={hit} tagName="mark" />

      <h2 style={{ fontSize: 12 + "px", marginTop: 4 + "px" }}>{ dateString }</h2>
    </div> 
  ) : null
})


const SuggestionHit = (({ hit }) => {
  if (!hit) return null;

  return hit ? (
    <div className="tag">
      { hit.query }
    </div>
  ) : null;
})

const HitsInIndex = (({ index }) => {
    
  return (index.title == "Pages") ? 

    <Index indexName={index.name}>
      <Hits className="Hits" hitComponent={PageHit} />
    </Index>  :
    <Index indexName={index.name}>
      <Hits className="Suggestions" hitComponent={SuggestionHit} />
    </Index>

})

const SearchResult = ({ indices, className }) => (
  <div className={className}>

    <HitsInIndex index={indices[1]} key={indices[1].name} />
    <HitsInIndex index={indices[0]} key={indices[0].name} />
    <PoweredBy />
  </div>
)
export default SearchResult
