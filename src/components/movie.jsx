function Movie(props){
    const{
        Title: title,
        Year: year,
        imdbID: id,
        Type: type,
        Poster: poster
    } = props;

    return  <div id={id} class="card movie">
    <div class="card-image waves-effect waves-block waves-light">
      {
        poster === 'N/A' ?
        <img class="activator" src='http://placekitten.com/200/300' /> 
        : <img class="activator" src={poster} />
      }
    </div>
    <div class="card-content">
      <span class="card-title activator grey-text text-darken-4">{title}</span>
      <p>{year} <span className="right">{type}</span></p>
    </div>
  </div>
}

export {Movie}