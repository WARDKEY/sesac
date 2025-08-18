package _05_class._f_interface;

public class Audio implements RemoteControl {

    private int volume;

    // turnOn, turnOff, setVolume(int v) 세 개의 추상 메서드를 가지고 있는 interface
    @Override
    public void turnOn() {
        System.out.println("리모컨으로 Audio를 켭니다.");
    }

    @Override
    public void turnOff() {
        System.out.println("리모컨으로 Audio를 끕니다.");
    }

    @Override
    public void setVolume(int volume) {
        if (volume > MAX_VOLUME) {
            this.volume = MAX_VOLUME;
        } else if (volume < MIN_VOLUME) {
            this.volume = MIN_VOLUME;
        } else {
            this.volume = volume;
        }

        System.out.println("Audio의 현재 볼륨 : " + this.volume);
    }
}
