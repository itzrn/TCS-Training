package XploreRecording;

public class A011 {
    public static void main(String[] args) {
        int alphaCount;
        alphaCount=A011_Movie.MovieConfig.getMovieCountAlpha();
        A011_Movie[] movies=new A011_Movie[A011_Movie.MovieConfig.movieCountAlpha];
        movies[0]=new A011_Movie(1,"this movie1",10,5);
        movies[1]=new A011_Movie(1, "this movie2", 20, 10);
        movies[2]=new A011_Movie(1, "this movie3", 30, 15);
        movies[3]=new A011_Movie(1, "this movie4", 40, 20);
        movies[4]=new A011_Movie(1, "this movie5", 50, 25);

        for(A011_Movie movieTmp:movies){
            System.out.println(movieTmp.toString());
        }
    }
}

class A011_Movie{
    private int movieId;
    private String movieName;
    private int views;
    private int rating;

    private static int movieCount=5;
    public static int movieCountAlpha;

    public static int getMovieCount() {
        return movieCount;
    }
    static { // this block is very similar to constructor
        movieCountAlpha=5;
    }

    static class MovieConfig{
        public static int movieCountAlpha;
        public static int rating;
        static{
            movieCountAlpha=5;
            rating=2;
        }
        public static int getMovieCountAlpha() {
            return movieCount;
        }
        public static int getMovieCountAlphaV2(){
            return movieCountAlpha;
        }
    }

    public A011_Movie(){
        this.movieId=11;
        this.movieName="this movie";
        this.views=0;
        this.rating=0;
    }

    public A011_Movie(int movieId, String movieName, int views, int rating) {
        this();
        this.movieId = movieId;
        this.movieName = movieName;
        this.views = views;
        this.rating = rating;
    }

    public int getMovieId() {
        return movieId;
    }
    public String getMovieName() {
        return movieName;
    }
    public int getViews() {
        return views;
    }
    public int getRating() {
        return rating;
    }
    public void setMovieId(int movieId) {
        this.movieId = movieId;
    }
    public void setMovieName(String movieName) {
        this.movieName = movieName;
    }
    public void setViews(int views) {
        this.views = views;
    }
    public void setRating(int rating) {
        this.rating = rating;
    }
    @Override
    public String toString(){
        return "Movie Id: "+this.movieId+" Movie Name: "+this.movieName+" Views: "+this.views+" Rating: "+this.rating;
    }

}

