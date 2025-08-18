package _05_class.Practice.pr05;

public class Mp3Player implements Music {

    private String song;

    public Mp3Player(String song) {
        this.song = song;
        System.out.println("=== MP3 Player ===");

    }

    @Override
    public void play() {
        System.out.println("MP3 플레이어에서 " + "'" + song + "'" + " 음악을 재생합니다.");
    }

    @Override
    public void stop() {
        System.out.println("MP3 플레이어에서 " + "'" + song + "'" + " 음악을 정지합니다.");

    }
}
