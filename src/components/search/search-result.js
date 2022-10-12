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

/*
function convertDate(hit) {
  const date = new Date(hit.publishDate['en-US']);
  const month = date.toLocaleString('default', { month: 'short' });
  const day = date.getDate();
  const year = date.getFullYear();
  const dateString = `${month} ${day}, ${year}`;
  console.log("date", dateString);
  return dateString;
}
*/

const PageHit = (({ hit }) => {
  return hit ? (
    <div>
      <Link to={ "blog/" + hit.fields.slug['en-US'] } >
        <h4>
          <Highlight attribute="fields.title.en-US" hit={hit} tagName="mark" />
        </h4>
      </Link>
      <Snippet attribute="fields.description.en-US" hit={hit} tagName="mark" />
    </div> 
  ) : null
})

const HitsInIndex = ({ index }) => (
  <Index indexName={index.name}>
    <HitCount />
    <Hits className="Hits" hitComponent={PageHit} />
  </Index>
)
const SearchResult = ({ indices, className }) => (
  <div className={className}>
    {indices.map(index => (
      <HitsInIndex index={index} key={index.name} />
    ))}
    <PoweredBy />
  </div>
)
export default SearchResult
