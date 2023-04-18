package com.desajavacidos.vehicleSharing.repo;

import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import com.desajavacidos.vehicleSharing.entities.Prenotazione;


public interface PrenotazioneDao extends JpaRepository<Prenotazione, Integer> {
//
	@Query("select p from Prenotazione p where p.archivioutentiId.id=?1 GROUP BY p.archivioutentiId.id")
	List<Prenotazione> findByArchivioutenti(Integer archivioutentiId);
	@Query("select p from Prenotazione p where p.veicoliId.id=?1 GROUP BY p.veicoliId.id")
	List<Prenotazione> findByVeicoli(Integer veicoliId);
	
	//find by user
	//find by veicolo
}
