"use client";

import AlbumSlider from "./AlbumSlider";
import {motion} from 'framer-motion';
import { fadeIn } from "../../../variants";

import SectionHeader from "../SectionHeader";

const Albums = () => {
    return (
        <section id="discography" className="pt-[120px] pb-[250px]">
            <div className="container mx-auto">
                <SectionHeader pretitle={'Discographie'} title={'Albums Populaires'}/>
                {/* album slider */}
                <motion.div
                variants={fadeIn('up', 0.4)}
                initial='hidden'
                whileInView={'show'}
                viewport={{ once: false, amount: 0.3 }}>
                    <AlbumSlider />
                </motion.div>
            </div>
        </section>
    );
};

export default Albums;