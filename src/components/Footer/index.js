import classNames from "classnames/bind";
import styles from "./Footer.module.scss";

const cx = classNames.bind(styles);

function Footer() {
    return (
        <div className={cx('footer')}>
            <div className={cx('wrapper-footer')}>
                <div className={cx('info-support')}>
                    <div className={cx('logo')}>
                        <img src="/images/logo_footer.png" alt="Logo" />
                        <div className={cx('copyright')}>
                            <img src="/images/copyright.png" alt="Bản quyền" />
                        </div>
                    </div>
                    <div className={cx('partner')}>
                        <h1>Với các đối tác</h1>
                        <img src="/images/partner.png" alt="Đối tác" />
                    </div>
                </div>
                <div className={cx('contact-support')}>
                    <h1>Trung tâm trợ giúp</h1>
                    <span>Liên hệ BONGBET
                        Đại lý
                        Chính sách và bảo mật
                        Điều khoản điều kiện
                        Câu hỏi thường gặp
                        Miễn trách nhiệm
                        Chơi có trách nhiệm</span>
                </div>
            </div>
        </div >
    );
}

export default Footer;