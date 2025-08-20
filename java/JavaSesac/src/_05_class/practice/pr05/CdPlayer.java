package _05_class.practice.pr05;

public class CdPlayer implements Music {

    private String album;

    public CdPlayer(String album) {
        this.album = album;
        System.out.println("=== CD Player ===");
    }

    @Override
    public void play() {
        System.out.println("CD 플레이어에서 " + "'" + album + "'" + " 앨범을 재생합니다.");
    }

    @Override
    public void stop() {
        System.out.println("CD 플레이어에서 " + "'" + album + "'" + " 앨범을 정지합니다.");

    }
}
