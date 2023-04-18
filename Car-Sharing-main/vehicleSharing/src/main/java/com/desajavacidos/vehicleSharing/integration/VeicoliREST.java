package com.desajavacidos.vehicleSharing.integration;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.desajavacidos.vehicleSharing.entities.Veicoli;
import com.desajavacidos.vehicleSharing.entities.Veicoli.Veicolo;
import com.desajavacidos.vehicleSharing.services.iServices.VeicoliService;

@RestController
@RequestMapping("/api/veicoli")
public class VeicoliREST {

	@Autowired
	private VeicoliService service;

//	@Autowired
//	private DescrizioneService deservice;

	@GetMapping
	public List<Veicoli> getall() {

		return service.getAll();
	}

	@GetMapping("/{id}")
	public Veicoli getVeicoli(@PathVariable("id") int id) {

			return service.getVeicoliById(id);
		
	}

	@GetMapping("/status/{disponibilita}")
	public List<Veicoli> getVeicoliDisponibili(@PathVariable("disponibilita") boolean disponibilita) {

		return service.getVeicoliByDisp(disponibilita);

	}

	@GetMapping("/tipo/{tipo}")
	public List<Veicoli> getTipologiaVeicoli(@PathVariable("tipo") Veicolo veicolo) {
		
		return service.getByTipologia(veicolo);
	}
	
	@GetMapping("/alimentazione/{alimentazione}")
	public List<Veicoli> getTipologiaVeicoli(@PathVariable("alimentazione") String alimentazione) {
		
		return service.getByAlimentazione(alimentazione);
	}

	@PostMapping
	public void addVeicoli(@RequestBody Veicoli u) {

		service.addVeicoli(u);
	}

	@PutMapping("/{id}")
	public void updateVeicoli(@PathVariable("id") int id, @RequestBody Veicoli u) {
		Veicoli veicoliById = service.getVeicoliById(id);
		veicoliById.setVeicolo(u.getVeicolo());
		veicoliById.setAlimentazione(u.getAlimentazione());
		veicoliById.setDisponibilita(u.getDisponibilita());
//		veicoliById.setDataInserimento(u.getDataInserimento());
		veicoliById.setPosizione(u.getPosizione());
		veicoliById.setProlungato(u.getProlungato());
		veicoliById.setModello(u.getModello());
		veicoliById.setColore(u.getColore());
		veicoliById.setCilindrata(u.getCilindrata());
		veicoliById.setImmagine(u.getImmagine());

			service.updateVeicoli(veicoliById);

		
	}

	@DeleteMapping("/{id}")
	public void deleteUtente(@PathVariable("id") int id) {

			service.deleteVeicoliByID(id);
		
	}
}