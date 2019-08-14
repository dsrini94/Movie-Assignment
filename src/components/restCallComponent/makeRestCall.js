module.exports = (URL,type,updateState) => {
    fetch('https://api.themoviedb.org/3/movie/now_playing?api_key=b6f123d9800c3e64381818d9e05ac41c&language=en-US&page=1')
            .then(response => response.json())
            .then(data => { 
                this.updateState(data,type);
            });
}