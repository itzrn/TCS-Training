public class A011_CoinMain {
    public static void main(String[] args) {
        A011_Coin coin = new A011_Coin();
        System.out.println("Initial : "+coin.getFaceUp());

        for(int i=0;i<10;i++){
            coin.flip();
            System.out.println("After flip : "+coin.getFaceUp());
        }
    }
}
