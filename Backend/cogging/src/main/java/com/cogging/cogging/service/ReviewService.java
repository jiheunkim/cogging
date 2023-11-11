package com.cogging.cogging.service;

import com.cogging.cogging.dto.*;
import com.cogging.cogging.entity.Community;
import com.cogging.cogging.entity.Member;
import com.cogging.cogging.entity.Place;
import com.cogging.cogging.entity.Review;
import com.cogging.cogging.exceptions.BaseException;
import com.cogging.cogging.repository.CommunityRepository;
import com.cogging.cogging.repository.PlaceRepository;
import com.cogging.cogging.repository.ReviewRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Sort;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.List;

@Service
@RequiredArgsConstructor
public class ReviewService {

    private final ReviewRepository reviewRepository;
    private final PlaceRepository placeRepository;

    @Transactional
    public int createReview(Member member, ReviewCreateDto reviewCreateDto){
        Place place = placeRepository.findById(reviewCreateDto.getPlaceId())
                .orElseThrow(() -> new BaseException("존재하지 않는 장소입니다.", null, HttpStatus.NOT_FOUND));

        Review review = reviewCreateDto.toEntity(member, place);

        return reviewRepository.save(review).getId();
    }

    @Transactional
    public List<ReviewDto> getReviewList(int placeId){
        List<Review> reviews = reviewRepository.findAllByPlaceIdOrderByCreatedAtDesc(placeId);
        List<ReviewDto> reviewDtos = new ArrayList<>();

        for (Review review : reviews) {
            reviewDtos.add(review.toDto());
        }

        return reviewDtos;
    }
}
