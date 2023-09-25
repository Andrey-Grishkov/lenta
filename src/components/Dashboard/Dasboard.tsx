import React, { FC } from "react";
import styles from "./Dasboard.module.scss";
import Modal from "../Modal/Modal";
import { useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "../../services/store";
import { openModal, closeModal } from "../../services/modalSlice";
import MultipleLineGraph from "../MultipleLineGraph/MultipleLineGraph";
import FilterSidebar from "../FilterSidebar/FilterSidebar";
import { forecastData } from "../../utils/forecast_archive";


export const Dashboard: FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const isOpen = useSelector((state: RootState) => state.modal.isOpen);

  React.useEffect(() => {
    dispatch(openModal());
}, [dispatch]);

  const handleOpenModal = () => {
    dispatch(openModal());
  };

  const handleCloseModal = () => {
    dispatch(closeModal());
  };
  
  return (
    <div className={styles.dashboard}>
      <button className={styles.dashboard_button} onClick={handleOpenModal}>Изменить ТК</button>
        {isOpen && <Modal onClose={handleCloseModal} />}
      <div className={styles.dashboard_box}>
        <FilterSidebar />
        <MultipleLineGraph data={forecastData.data} />
      </div>
    </div>
    )
};
