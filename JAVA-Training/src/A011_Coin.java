import java.util.Random;

public class A011_Coin {
    public final static int HEADS=0;
    public final static int TAILS=1;

    private int faceUp;
    public A011_Coin(){
        flip();
    }
    public A011_Coin(int start){
        faceUp=start;
    }

    public void flip(){
        Random r=new Random();
        faceUp = r.nextInt(2);
    }

    public String getFaceUp(){
        if(faceUp==HEADS){
            return "HEADS";
        }else if(faceUp==TAILS){
            return "TAILS";
        }else{
            return "INVALID";
        }
    }
}
