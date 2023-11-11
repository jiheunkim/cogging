package com.cogging.cogging.service;

import com.cogging.cogging.dto.MemberDto;
import com.cogging.cogging.dto.PlaceDto;
import com.cogging.cogging.entity.Community;
import com.cogging.cogging.entity.Member;
import com.cogging.cogging.entity.Place;
import com.cogging.cogging.entity.Scrap;
import com.cogging.cogging.exceptions.BaseException;
import com.cogging.cogging.repository.PlaceRepository;
import com.cogging.cogging.repository.ScrapRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.List;

@RequiredArgsConstructor
@Service
public class ScrapService {

    private final ScrapRepository scrapRepository;
    private final PlaceRepository placeRepository;

    @Transactional
    public void createScrap(Member member, int placeId){
        Place place = placeRepository.findById(placeId)
                .orElseThrow(() -> new BaseException("존재하지 않는 장소입니다.", null, HttpStatus.NOT_FOUND));

        Scrap scarp = Scrap.builder()
                .member(member)
                .place(place)
                .build();

        scrapRepository.save(scarp);
    }
}
