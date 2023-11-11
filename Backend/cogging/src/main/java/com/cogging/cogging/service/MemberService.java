package com.cogging.cogging.service;

import com.cogging.cogging.dto.*;
import com.cogging.cogging.entity.*;
import com.cogging.cogging.exceptions.BaseException;
import com.cogging.cogging.jwt.JwtTokenProvider;
import com.cogging.cogging.repository.*;
import jakarta.persistence.EntityNotFoundException;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Sort;
import org.springframework.http.HttpStatus;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import java.util.Optional;

import static com.cogging.cogging.exceptions.ExceptionConstants.USER_NOT_FOUND;

@RequiredArgsConstructor
@Service
public class MemberService {

    private final MemberRepository memberRepository;
    private final PasswordEncoder passwordEncoder;
    private final JwtTokenProvider jwtTokenProvider;
    private final CommunityRepository communityRepository;
    private final ReviewRepository reviewRepository;
    private final PloggingRepository ploggingRepository;
    private final JoinPloggingRepository joinPloggingRepository;
    private final ScrapRepository scrapRepository;

    @Transactional
    public int signUp(MemberSingUpDto requestDto){
        if(checkEmail(requestDto.getEmail())){
            throw new BaseException("이미 존재하는 이메일입니다.", null, null);
        }

        Member newMember = memberRepository.save(requestDto.toEntity());
        newMember.encodePassword(passwordEncoder);

        return newMember.getId();
    }

    @Transactional
    public String login(Map<String, String> member) {
        Member loginMember = memberRepository.findByEmail(member.get("email"))
                .orElseThrow(() -> new BaseException("존재하지 않는 이메일입니다.", null, HttpStatus.NOT_FOUND));

        if (!passwordEncoder.matches(member.get("password"), loginMember.getPassword())) {
            throw new BaseException("잘못된 비밀번호입니다.", null, null);
        }

        return jwtTokenProvider.createToken(loginMember.getUsername());
    }

    @Transactional
    public boolean checkEmail(String email) {
        Optional<Member> member = memberRepository.findByEmail(email);
        return member.isPresent();
    }

    @Transactional
    public boolean checkNickname(String nickname) {
        Optional<Member> member = memberRepository.findByNickname(nickname);
        return member.isPresent();
    }

    @Transactional
    public MemberDto getMember(int memberId) {
        Member member = memberRepository.findById(memberId)
                .orElseThrow(() -> new BaseException(USER_NOT_FOUND, null, HttpStatus.NOT_FOUND));

        return member.toDto();
    }

    @Transactional
    public List<MemberDto> getMemberList() {
        //Sort sort = Sort.by(Sort.Order.asc("id"));
        List<Member> memberList = memberRepository.findAll();
        List<MemberDto> memberDtoList = new ArrayList<>();

        for (Member member : memberList) {
            memberDtoList.add(member.toDto());
        }

        return memberDtoList;
    }

    @Transactional
    public List<CommunityDto> getMyCommunity(Member member){
        List<Community> communities = communityRepository.findByMemberIdOrderByCreatedAtDesc(member.getId());
        List<CommunityDto> CommunityDtos = new ArrayList<>();

        for (Community community : communities) {
            CommunityDtos.add(community.toDto());
        }

        return CommunityDtos;
    }

    @Transactional
    public List<ReviewDto> getMyReview(Member member){
        List<Review> reviews = reviewRepository.findByMemberIdOrderByCreatedAtDesc(member.getId());
        List<ReviewDto> ReviewDtos = new ArrayList<>();

        for (Review review : reviews) {
            ReviewDtos.add(review.toDto());
        }

        return ReviewDtos;
    }

    @Transactional
    public List<PloggingListDto> getMyPlogging(Member member){
        List<Plogging> ploggings = ploggingRepository.findByMemberIdOrderByCreatedAtDesc(member.getId());
        List<PloggingListDto> PloggingDtos = new ArrayList<>();

        for (Plogging plogging : ploggings) {
            PloggingDtos.add(plogging.toListDto());
        }

        return PloggingDtos;
    }

//    @Transactional
//    public List<PloggingListDto> getMyJoinPlogging(Member member){
//        // 내가 참여한 플로깅 리스트 반환
//        List<JoinPlogging> joinPlogging = joinPloggingRepository.findAllByMemberId(member.getId());
//
//        List<PloggingListDto> joinedPloggings = new ArrayList<>();
//
//    }
}
