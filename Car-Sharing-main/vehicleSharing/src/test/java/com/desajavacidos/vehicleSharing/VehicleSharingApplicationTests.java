package com.desajavacidos.vehicleSharing;



import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import com.desajavacidos.vehicleSharing.entities.Veicoli;
import com.desajavacidos.vehicleSharing.services.iServices.ArchivioUtentiService;

import com.desajavacidos.vehicleSharing.services.iServices.PrenotazioneService;
import com.desajavacidos.vehicleSharing.services.iServices.VeicoliService;

@SpringBootTest
class VehicleSharingApplicationTests {

	@Autowired
	ArchivioUtentiService utente;
//	@Autowired
//	DescrizioneService descrizione;
	@Autowired
	PrenotazioneService prenotazione;
	@Autowired
	VeicoliService veicolo;
	
	@Test
	void contextLoads() {
		
//		ArchivioUtenti u = new ArchivioUtenti();
//		u.setCognome("Rossi");
//		u.setNome("Mario");
//		u.setEmail("mario.rossi@gmail.com");
//		u.setPassword("mariorossi");
//		u.setTipo("A");
//		u.setUserId("MARIOROSSI");
//		
//		System.out.println("Non Aggiunto");
//		utente.addUtente(u);
//		System.out.println("Aggiunto");
		
//		Descrizione d = new Descrizione();
		
//		Prenotazione p = new Prenotazione();
//		
//		p.setArchivioUtenti(utente.getUtenteById(1));
//		p.setVeicoli(veicolo.getVeicoliById(1));
//		p.setTimestamp(Timestamp.valueOf(LocalDateTime.now()));
//		
//		prenotazione.addPresentazione(p);
//		System.out.println("Prenotazione aggiunta");
		
//		Veicoli v = new Veicoli();
//		v.setAlimentazione("il miglior editor");
//		v.setDisponibilita(false);
//		v.setPosizione("eclipse");
//		
//		veicolo.addVeicoli(v);
		
		//veicolo.updateVeicoli(veicolo.getVeicoliById(7).setDisponibilita(true));
		
		Veicoli v = veicolo.getVeicoliById(7);
		v.setDisponibilita(true);
		veicolo.updateVeicoli(v);
		
//		Descrizione d = new Descrizione();
//		d.setColore("rosso");
//		d.setCilindrata("...");
//		d.setModello("xyz");
//		d.setVeicoli(veicolo.getVeicoliById(1));
//		
//		descrizione.addDescrizione(d);
//		
	}

}
