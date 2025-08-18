package _05_class._f_interface;

public class Television implements RemoteControl {
    private int volume;

    @Override
    public void turnOn() {
        System.out.println("TV를 켭니다.");
    }

    @Override
    public void turnOff() {
        System.out.println("TV를 끕니다.");
    }

    @Override
    public void setVolume(int v) {
        if (v > MAX_VOLUME) {
            volume = MAX_VOLUME;
        } else if (v < MIN_VOLUME) {
            volume = MIN_VOLUME;
        } else {
            // 정상 volume 범위
            volume = v;
        }

        System.out.println("현재 TV의 볼륨 : " + volume);
    }
}
