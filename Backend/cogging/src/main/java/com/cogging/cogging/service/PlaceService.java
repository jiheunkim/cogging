package com.cogging.cogging.service;

import com.cogging.cogging.dto.PlaceDto;
import com.cogging.cogging.entity.Place;
import com.cogging.cogging.repository.PlaceRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.List;

@RequiredArgsConstructor
@Service
public class PlaceService {

    private final PlaceRepository placeRepository;

    @Transactional
    public List<PlaceDto> searchPlaceList(String keyword){
        List<Place> places = placeRepository.findByNameOrAddressContaining(keyword, keyword);
        List<PlaceDto> PlaceDtos = new ArrayList<>();

        for (Place place : places) {
            PlaceDtos.add(place.toDto());
        }

        return PlaceDtos;
    }

    @Transactional
    public List<PlaceDto> getTopPlaceList(){
        List<Place> places = placeRepository.findTop10ByOrderByScrapCountDesc();
        List<PlaceDto> PlaceDtos = new ArrayList<>();

        for (Place place : places) {
            PlaceDtos.add(place.toDto());
        }

        return PlaceDtos;
    }
}
