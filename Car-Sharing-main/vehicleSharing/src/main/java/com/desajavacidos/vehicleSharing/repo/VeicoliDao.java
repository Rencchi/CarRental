package com.desajavacidos.vehicleSharing.repo;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.desajavacidos.vehicleSharing.entities.Veicoli;
import com.desajavacidos.vehicleSharing.entities.Veicoli.Veicolo;

public interface VeicoliDao extends JpaRepository<Veicoli, Integer> {

	List<Veicoli> findByDisponibilita(boolean disponibilita);
	List<Veicoli> findByVeicolo(Veicolo veicolo);
	List<Veicoli> findByAlimentazione(String alimentazione);
}
