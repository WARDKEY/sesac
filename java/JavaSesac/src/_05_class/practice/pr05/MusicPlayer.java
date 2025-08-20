package _05_class.practice.pr05;

public class MusicPlayer {

    public static void main(String[] args) {
        Music mp3 = new Mp3Player("아이유 블루밍");
        mp3.play();
        mp3.stop();

        System.out.println();

        Music cd = new CdPlayer("아이유 꽃갈피");
        cd.play();
        cd.stop();
    }
}
