package com.desajavacidos.vehicleSharing.services.iServices;

import java.util.List;

import com.desajavacidos.vehicleSharing.entities.ArchivioUtenti;
import com.desajavacidos.vehicleSharing.entities.Prenotazione;
import com.desajavacidos.vehicleSharing.entities.Veicoli;


public interface PrenotazioneService {

	
	
	List<Prenotazione> getAll();

	Prenotazione getPrenotazioneById(int id);

	void addPrenotazione(Prenotazione u);
	
	boolean addPrenotazione(int idUtente, int idVeicolo);

	void deletePrenotazioneById(int id);

	void updatePrenotazione(Prenotazione u);
	
	boolean  putPrenotazione(int idUtente, int veicolo, int id);
	
	List<ArchivioUtenti> getUtentiById(int idUtente);
	List<Veicoli> getVeicoliById(int idVeicolo);
}
