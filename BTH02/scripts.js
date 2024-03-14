/* bai 1 */
function Giaiptbacnhat(){
    var a = parseFloat(document.getElementById('hesoa').value);
    var b = parseFloat(document.getElementById('hesob').value);

    if (isNaN(a) || isNaN(b)) {
        document.getElementById("ketqua").innerText='Vui lòng nhập số hợp lệ.';
    } else {
        if (a==0) {
            if (b==0) {
                document.getElementById("ketqua").innerText='Phương trình vô số nghiệm';
            } else {
                document.getElementById("ketqua").innerText='Phương trình vô nghiệm';
            }
        } else {
            var x=-b/a;
            document.getElementById('ketqua').innerText='Nghiệm x=' + x;
        } 
    }
}
/* bai 2 */
function gopy() {
    var hoten = document.getElementById('hoten').value;
    var sdt = document.getElementById('sdt').value;
    var mathe = document.getElementById('mathe').value;
    var email = document.getElementById('email').value;
    var loaikh = document.getElementById('loaikh').value;
    var mahd = document.getElementById('mahd').value;
    var mota = document.getElementById('mota').value;
    // hiển thị cửa sổ confirm
    var ketqua=confirm('Họ và tên: ' + hoten + '\nSố điện thoại: ' + sdt + '\nMã thẻ: ' + mathe + '\nEmail: ' + email + '\nLoại khách hàng: ' + loaikh + '\nMã hóa đơn: ' + mahd + '\nNội dung góp ý: ' + mota);
    if (ketqua) {
        // Nếu chọn OK, reset lại ô input
        document.getElementById('hoten').value="";
        document.getElementById('sdt').value="";
        document.getElementById('mathe').value="";
        document.getElementById('email').value="";
        document.getElementById('loaikh').value="";
        document.getElementById('mahd').value="";
        document.getElementById('mota').value="";
    }
}

/* bai 3 */
function gui() {
    var hoten = document.getElementById('hoten').value;
    var mail = document.getElementById('mail').value;
    var tieude = document.getElementById('tieude').value;
    var noidung = document.getElementById('noidung').value;
    // hiển thị cửa sổ confirm
    var ketqua = confirm('Họ và tên: ' + hoten + '\nĐịa chỉ e-mail: ' + mail + '\nTiêu đề bài viết: ' + tieude + '\nNội dung góp ý:\n' + noidung);
    if (ketqua) {
        // Nếu chọn OK, reset lại ô input
        document.getElementById('hoten').value="";
        document.getElementById('mail').value="";
        document.getElementById('tieude').value="";
        document.getElementById('noidung').value="";
    }
}

/* Bai 4 */
function tinhBMI() {
    // Lấy giá trị từ form
    const canNang = document.getElementById("can_nang").value;
    const chieuCao = document.getElementById("chieu_cao").value;
    const loaiTuoi = document.getElementById("loai_tuoi").value;

    // Tính BMI
    const bmi = canNang / (Math.pow(chieuCao, 2));

    // Phân loại BMI
    let phanLoai;
    if (bmi < 18.5) {
        phanLoai = "Dưới chuẩn";
    } else if (bmi < 25) {
        phanLoai = "Bình thường";
    } else if (bmi < 30) {
        phanLoai = "Thừa cân";
    } else if (bmi < 35) {
        phanLoai = "Béo phì cấp độ 1";
    } else if (bmi < 40) {
        phanLoai = "Béo phì cấp độ 2";
    } else {
        phanLoai = "Béo phì cấp độ 3";
    }

    // Khuyến nghị
    let khuyenNghi;
    switch (loaiTuoi) {
        case "trung_nien":
            if (phanLoai === "Béo phì cấp độ 1") {
                khuyenNghi = "Khám định kỳ";
            }else{
                khuyenNghi="";
            }
            break;
        case "trung_nien_gia_lon_tuoi":
            if (phanLoai === "Béo phì cấp độ 2") {
                khuyenNghi = "Tập thể dục thường xuyên";
            } else{
                khuyenNghi="";
            }
            break;
        case "gia_lon_tuoi":
            if (phanLoai === "Béo phì cấp độ 3") {
                khuyenNghi = "Hạn chế ăn mỡ động vật";
            } else{
                khuyenNghi="";
            }
            break;
    }

    // Hiển thị kết quả
    document.getElementById("bmi").innerHTML = bmi.toFixed(2);
    document.getElementById("phan_loai").innerHTML = phanLoai;
    document.getElementById("khuyen_nghi").innerHTML = khuyenNghi;

    return false;
}

/* Bài 5 */

function login() {
    var passwordInput = document.getElementById("password");
    var eyeIcon = document.querySelector(".eye-icon");

    if (passwordInput.type === "password") {
      passwordInput.type = "text";
      eyeIcon.classList.add("active");
    } else {
      passwordInput.type = "password";
      eyeIcon.classList.remove("active");
    }
  }

/* bai 6 */
function togglePassword() {
    var passwordInput = document.getElementById("password");
    var eyeIcon = document.querySelector(".eye-icon");

    if (passwordInput.type === "password") {
      passwordInput.type = "text";
      eyeIcon.classList.add("active");
    } else {
      passwordInput.type = "password";
      eyeIcon.classList.remove("active");
    }
  }