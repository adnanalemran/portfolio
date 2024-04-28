
import { Link } from 'react-router-dom';

const ProfileCard = () => {
    return (
        <div>
            <div data-aos="zoom-in">
                <div className="about-profile-box info-box shadow-box h-full">
                    <img src="src/assets/images/bg1.png" alt="BG" className="bg-img" />
                    <div className="inner-profile-icons shadow-box">
                        <a href="https://www.linkedin.com/in/adnanalemran/">
                            <svg xmlns="http://www.w3.org/2000/svg" width="3em" height="3em" viewBox="0 0 32 32"><g fill="currentColor"><path d="M19.515 11.952c-.678 0-1.18.171-1.573.387c-.063-.224-.27-.388-.514-.339h-2.984c-.295-.049-.534.19-.443.5v11c-.091.28.148.52.443.5h2.984c.295.02.534-.22.534-.515l-.001-6.648c-.001-.003-.012-.321.189-.54c.161-.174.438-.263.821-.263c.638 0 .922.261 1.028.845v6.606c-.105.295.134.535.429.515h3.145c.295.02.534-.22.428-.515v-6.828c.105-3.472-2.368-4.705-4.486-4.705M23.038 23h-2.076v-6.121c0-1.181-.763-1.913-1.99-1.913c-.694 0-1.234.204-1.606.606c-.517.56-.477 1.27-.366 1.428v6h-2.022v-9.98h1.916v.336a.532.532 0 0 0 .86.423l.14-.108c.405-.319.824-.65 1.622-.65c.826 0 3.523.263 3.523 3.637zM11 6.966c-1.122 0-2.034.912-2.034 2.034s.912 2.034 2.034 2.034s2.034-.912 2.034-2.034S12.122 6.966 11 6.966m0 3c-.532 0-.966-.434-.966-.966s.434-.966.966-.966s.966.434.966.966s-.434.966-.966.966m1.428 1.985H9.46c-.295 0-.534.239-.46.549v11c-.074.28.165.52.46.5h2.968c.295.02.534-.22.534-.515v-11a.534.534 0 0 0-.534-.534M12 23H9.994v-9.98H12z" /><path d="M16-.034C7.158-.034-.034 7.158-.034 16S7.158 32.034 16 32.034S32.034 24.842 32.034 16S24.842-.034 16-.034m0 31C7.748 30.966 1.034 24.252 1.034 16S7.748 1.034 16 1.034S30.966 7.748 30.966 16S24.252 30.966 16 30.966" /></g></svg>
                        </a>
                        <a href="https://www.facebook.com/adnan.fb/">
                            <svg xmlns="http://www.w3.org/2000/svg" width="3em" height="3em" viewBox="0 0 32 32"><g fill="currentColor"><path d="M16-.034C7.159-.034-.035 7.158-.035 16S7.159 32.034 16 32.034S32.035 24.842 32.035 16S24.841-.034 16-.034m0 31C7.748 30.966 1.035 24.252 1.035 16S7.748 1.034 16 1.034S30.965 7.748 30.965 16S24.252 30.966 16 30.966" /><path d="M19.5 7h-2.668C13.434 6.966 13 9.069 13 11.345V13h-1.5a.445.445 0 0 0-.5.5v3a.445.445 0 0 0 .5.5H13v7.5a.449.449 0 0 0 .503.5h3.055c.295.034.534-.205.44-.5L17 17h2.5a.445.445 0 0 0 .5-.5v-3a.445.445 0 0 0-.5-.5h-2.503L17 11.5c.097-.639.097-.535.69-.5h1.789c.139-.031.287-.014.391-.115c.104-.101.164-.239.129-.385v-3A.444.444 0 0 0 19.5 7m-.535 2.944l-1.254-.048c-1.553 0-1.683.843-1.683 1.706l-.004 1.896a.534.534 0 0 0 .534.535H19v1.932h-2.44a.535.535 0 0 0-.535.534L16.024 24H14v-7.5c0-.295-.201-.534-.497-.534H12v-1.932h1.503a.534.534 0 0 0 .378-.156c.1-.101.118-.237.118-.379v-2.155c0-2.242.453-3.31 2.832-3.31h2.133v1.91z" /></g></svg>
                        </a>
                    </div>
                    <div
                        className="d-flex align-items-center justify-content-between"
                    >
                        <div className="infos">
                            <h4>Stay with me</h4>
                            <h1>Profiles</h1>
                        </div>

                        <Link to="/about" className="about-btn">
                            <img src="src/assets/images/icon.svg" alt="Button" />
                        </Link>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default ProfileCard;