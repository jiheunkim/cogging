package com.cogging.cogging.service;

import com.cogging.cogging.dto.*;
import com.cogging.cogging.entity.*;
import com.cogging.cogging.exceptions.BaseException;
import com.cogging.cogging.repository.JoinPloggingRepository;
import com.cogging.cogging.repository.PloggingRepository;
import com.cogging.cogging.repository.PlaceRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@RequiredArgsConstructor
@Service
public class PloggingService {

    private final PloggingRepository ploggingRepository;
    private final PlaceRepository placeRepository;
    private final JoinPloggingRepository joinPloggingRepository;

    @Transactional
    public int createPlogging(Member member, PloggingCreateDto ploggingCreateDto){
        Place place = placeRepository.findById(ploggingCreateDto.getPlaceId())
                .orElseThrow(() -> new BaseException("존재하지 않는 장소입니다.", null, HttpStatus.NOT_FOUND));

        Plogging plogging = ploggingRepository.save(ploggingCreateDto.toEntity(member, place));
        joinPlogging(member, plogging.getId());

        return plogging.getId();
    }

    @Transactional
    public List<PloggingListDto> getPloggingList(int id){
        List<Plogging> ploggings = ploggingRepository.findByPlaceId(id);
        List<PloggingListDto> ploggingListDtos = new ArrayList<>();
        System.out.println("tstet = ");

        for (Plogging plogging : ploggings) {
            ploggingListDtos.add(plogging.toListDto());
            System.out.println("plogging = " + plogging);
        }

        return ploggingListDtos;
    }

    @Transactional
    public PloggingDto getPlogging(int id){
        Plogging plogging = ploggingRepository.findById(id)
                .orElseThrow(() -> new BaseException("존재하지 않는 글입니다.", null, HttpStatus.NOT_FOUND));

        return plogging.toDto();
    }

    @Transactional
    public void joinPlogging(Member member, int ploggingId){
        Plogging plogging = ploggingRepository.findById(ploggingId)
                .orElseThrow(() -> new BaseException("존재하지 않는 글입니다.", null, HttpStatus.NOT_FOUND));

        if(joinPloggingRepository.findByMemberIdAndPloggingId(member.getId(), ploggingId).isPresent()){
            throw new BaseException("이미 참여한 플로깅입니다.", null, null);
        }

        JoinPlogging joinPlogging = JoinPlogging.builder()
                .member(member)
                .plogging(plogging)
                .build();

        joinPloggingRepository.save(joinPlogging);
    }

    @Transactional
    public void deleteJoinPlogging(Member member, int ploggingId){
        JoinPlogging joinPlogging = joinPloggingRepository.findByMemberIdAndPloggingId(member.getId(), ploggingId)
                .orElseThrow(() -> new BaseException("신청내역에 없습니다.", null, HttpStatus.NOT_FOUND));

        joinPloggingRepository.delete(joinPlogging);
    }
}
