import React from 'react';

import styles from './Explore.module.css';

import { GoSettings } from 'react-icons/go';
import { Link } from 'react-router-dom';

const Explore = () => {

    return (
        <section className={styles.explore_page}>

            <div className={styles.explore_imgs}>
                <Link to={'/category/Abstract'} className={styles.img_section}>
                    <img src={require("../../assets/Abstract_Cover.png")} alt='img' />
                    <div className={styles.text_on_img}>
                        <h2>Abstract</h2>
                    </div>
                </Link>
                <Link to={'/category/Aerial Photography'} className={styles.img_section}>
                    <img src={require("../../assets/AerialPhotography_Cover.png")} alt='img' />
                    <div className={styles.text_on_img}>
                        <h2>Aerial Photography</h2>
                    </div>
                </Link>
                <Link to={'/category/Animals & Wildlife'} className={styles.img_section}>
                    <img src={require("../../assets/Animals&Wildlife_Cover.png")} alt='img' />
                    <div className={styles.text_on_img}>
                        <h2>Animals & Wildlife</h2>
                    </div>
                </Link>
                <Link to={'/category/Architectural Concepts'} className={styles.img_section}>
                    <img src={require("../../assets/ArchitecturalConcepts_Cover.png")} alt='img' />
                    <div className={styles.text_on_img}>
                        <h2>Architectural Concepts</h2>
                    </div>
                </Link>
                <Link to={'/category/Automotive'} className={styles.img_section}>
                    <img src={require("../../assets/Automotive_Cover.png")} alt='img' />
                    <div className={styles.text_on_img}>
                        <h2>Automotive</h2>
                    </div>
                </Link>
                <Link to={'/category/Fantasy & Sci-Fi'} className={styles.img_section}>
                    <img src={require("../../assets/Fantasy&Sci-Fi_Cover.png")} alt='img' />
                    <div className={styles.text_on_img}>
                        <h2>Fantasy & Sci-Fi</h2>
                    </div>
                </Link>
                <Link to={'/category/Food & Drink'} className={styles.img_section}>
                    <img src={require("../../assets/Food&Drink_Cover.png")} alt='img' />
                    <div className={styles.text_on_img}>
                        <h2>Food&Drink</h2>
                    </div>
                </Link>
                <Link to={'/category/Holidays'} className={styles.img_section}>
                    <img src={require("../../assets/Holiday_Cover.png")} alt='img' />
                    <div className={styles.text_on_img}>
                        <h2>Holidays</h2>
                    </div>
                </Link>
                <Link to={'/category/Landscape'} className={styles.img_section}>
                    <img src={require("../../assets/Landscape_Cover.png")} alt='img' />
                    <div className={styles.text_on_img}>
                        <h2>Landscape</h2>
                    </div>
                </Link>
                <Link to={'/category/Pixel & Voxel'} className={styles.img_section}>
                    <img src={require("../../assets/Pixel&Voxel_Cover.png")} alt='img' />
                    <div className={styles.text_on_img}>
                        <h2>Pixel & Voxel</h2>
                    </div>
                </Link>
                <Link to={'/category/Portraits'} className={styles.img_section}>
                    <img src={require("../../assets/Portrait_Cover.png")} alt='img' />
                    <div className={styles.text_on_img}>
                        <h2>Portraits</h2>
                    </div>
                </Link>
                <Link to={'/category/Realism'} className={styles.img_section}>
                    <img src={require("../../assets/Realism_Cover.png")} alt='img' />
                    <div className={styles.text_on_img}>
                        <h2>Realism</h2>
                    </div>
                </Link>
            </div>
        </section>
    )
}

export default Explore
