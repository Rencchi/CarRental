package com.desajavacidos.vehicleSharing.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.desajavacidos.vehicleSharing.entities.Veicoli;
import com.desajavacidos.vehicleSharing.entities.Veicoli.Veicolo;
import com.desajavacidos.vehicleSharing.repo.VeicoliDao;
import com.desajavacidos.vehicleSharing.services.iServices.VeicoliService;

@Service
public class VeicoliServiceImpl implements VeicoliService {
    
    @Autowired
    private VeicoliDao dao;
    
    @Override
    public List<Veicoli> getAll() {
        return dao.findAll();
    }

    @Override
    public Veicoli getVeicoliById(int id) {
        return dao.findById(id).get();
    }

    @Override
    public void addVeicoli(Veicoli v) {
    	
        dao.save(v);
        
    }

    

    @Override
    public void updateVeicoli(Veicoli v) {
        dao.save(v);
    }

    @Override
    public void deleteVeicoliByID(int id) {
        dao.deleteById(id);
    }

    @Override
    public List<Veicoli> getVeicoliByDisp(boolean disponibilita) {
        
        return dao.findByDisponibilita(disponibilita);
        //return repo.findAll();
    }

	@Override
	public List<Veicoli> getByTipologia(Veicolo veicolo) {
		// TODO Auto-generated method stub
		return dao.findByVeicolo(veicolo);
	}

	@Override
	public List<Veicoli> getByAlimentazione(String alimentazione) {
		
		return dao.findByAlimentazione(alimentazione);
	}

}