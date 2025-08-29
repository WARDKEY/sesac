// const dtoResultBox = document.getElementById('form-container');


function postForm() {
    const form = document.getElementById('form_post');
    axios
        .post(`/form/pr`, {
            name: form.name.value, gender: form.gender.value,
            year: form.year.value, month: form.month.value, day: form.day.value, hobby: form.hobby.value
        })
        .then((res) => {
            console.log(res.data.name + "회원가입 성공");

        });
}